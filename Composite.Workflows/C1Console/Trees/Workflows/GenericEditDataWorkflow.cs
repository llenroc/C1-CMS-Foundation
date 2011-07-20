using System;
using System.Collections.Generic;
using Composite.C1Console.Actions;
using Composite.C1Console.Workflow;
using Composite.Core.IO;
using Composite.Core.Serialization;
using Composite.Data;
using Composite.Data.DynamicTypes;
using Composite.Data.GeneratedTypes;
using Composite.Data.ProcessControlled;
using Composite.Data.ProcessControlled.ProcessControllers.GenericPublishProcessController;


namespace Composite.C1Console.Trees.Workflows
{
    [EntityTokenLock()]
    [AllowPersistingWorkflow(WorkflowPersistingType.Idle)]
    public sealed partial class GenericEditDataWorkflow : Composite.C1Console.Workflow.Activities.FormsWorkflow
    {
        [NonSerialized]
        private GenericEditDataActionNode _genericEditDataActionNode;

        [NonSerialized]
        private DataTypeDescriptorFormsHelper _dataTypeDescriptorFormsHelper = null;

        [NonSerialized]
        private string _typeName = null;


        private DataTypeDescriptorFormsHelper FormsHelper
        {
            get
            {
                if (_dataTypeDescriptorFormsHelper == null)
                {
                    if (string.IsNullOrEmpty(this.Payload) == true) throw new InvalidOperationException("The interface type should be a part of the workflows payload");

                    Dictionary<string, string> serializedValues = StringConversionServices.ParseKeyValueCollection(this.Payload);

                    _genericEditDataActionNode = (GenericEditDataActionNode)ActionNode.Deserialize(serializedValues, true);

                    Type interfaceType;

                    DataEntityToken dataEntityToken = this.EntityToken as DataEntityToken;
                    if (dataEntityToken != null)
                    {
                        interfaceType = dataEntityToken.InterfaceType;
                    }
                    else
                    {
                        throw new InvalidOperationException("The given entity token is of wrong type");
                    }

                    DataTypeDescriptor dataTypeDescriptor = DynamicTypeManager.GetDataTypeDescriptor(interfaceType);
                    if (dataTypeDescriptor == null) throw new InvalidOperationException(string.Format("Can not find the type descriptor for the type '{0}'", interfaceType));

                    _typeName = dataTypeDescriptor.Name;

                    GeneratedTypesHelper generatedTypesHelper = new GeneratedTypesHelper(dataTypeDescriptor) { AllowForiegnKeyEditing = true };

                    _dataTypeDescriptorFormsHelper = new DataTypeDescriptorFormsHelper(dataTypeDescriptor, true, this.EntityToken);
                    if (string.IsNullOrEmpty(_genericEditDataActionNode.CustomFormMarkupPath) == false)
                    {
                        _dataTypeDescriptorFormsHelper.AlternateFormDefinition = C1File.ReadAllText(_genericEditDataActionNode.CustomFormMarkupPath);
                    }
                    _dataTypeDescriptorFormsHelper.LayoutIconHandle = _genericEditDataActionNode.Icon.ResourceName;
                    _dataTypeDescriptorFormsHelper.AddReadOnlyFields(generatedTypesHelper.NotEditableDataFieldDescriptorNames);
                }

                return _dataTypeDescriptorFormsHelper;
            }
        }



        private string TypeName
        {
            get
            {
                return _typeName;
            }
        }



        public GenericEditDataWorkflow()
        {
            InitializeComponent();
        }



        private void editCodeActivity_DisplayForm_ExecuteCode(object sender, EventArgs e)
        {
            IData data = ((DataEntityToken)this.EntityToken).Data;

            if (data is IPublishControlled)
            {
                IPublishControlled publishControlledData = (IPublishControlled)data;
                if (publishControlledData.PublicationStatus == GenericPublishProcessController.Published)
                {
                    publishControlledData.PublicationStatus = GenericPublishProcessController.Draft;
                }
            }

            this.FormsHelper.UpdateWithBindings(data, this.Bindings);
            this.FormsHelper.LayoutLabel = data.GetLabel(true);

            this.DeliverFormData(
                    this.TypeName,
                    StandardUiContainerTypes.Document,
                    this.FormsHelper.GetForm(),
                    this.Bindings,
                    this.FormsHelper.GetBindingsValidationRules(data)
                );
        }



        private void saveCodeActivity_UpdateData_ExecuteCode(object sender, EventArgs e)
        {
            UpdateTreeRefresher updateTreeRefresher = this.CreateUpdateTreeRefresher(this.EntityToken);

            IData data = ((DataEntityToken)this.EntityToken).Data;

            bool isValid = ValidateBindings();
            if(!BindAndValidate(this.FormsHelper, data))
            {
                isValid = false;
            }

            if (data is IPublishControlled)
            {
                IPublishControlled publishControlledData = (IPublishControlled)data;
                if (publishControlledData.PublicationStatus == GenericPublishProcessController.Published)
                {
                    publishControlledData.PublicationStatus = GenericPublishProcessController.Draft;
                }
            }

            if (isValid == true)
            {
                DataFacade.Update(data);

                updateTreeRefresher.PostRefreshMesseges(this.EntityToken);
            }

            SetSaveStatus(isValid);
        }
    }
}
