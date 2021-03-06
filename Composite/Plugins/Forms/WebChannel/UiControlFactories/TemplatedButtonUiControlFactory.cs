using System;
using System.Configuration;
using System.Web.UI;
using Composite.C1Console.Forms;
using Composite.C1Console.Forms.CoreUiControls;
using Composite.C1Console.Forms.Plugins.UiControlFactory;
using Composite.C1Console.Forms.WebChannel;
using Composite.Plugins.Forms.WebChannel.Foundation;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration.ObjectBuilder;
using Microsoft.Practices.ObjectBuilder;


namespace Composite.Plugins.Forms.WebChannel.UiControlFactories
{
    /// <summary>    
    /// </summary>
    /// <exclude />
    [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)] 
    public class ButtonTemplateUserControlBase : UserControl
    {
        private string _formControlLabel;
        private EventHandler _clickEventHandler;

        /// <exclude />
        public EventHandler FormControlClickEventHandler
        {
            get { return _clickEventHandler; }
            set { _clickEventHandler = value; }
        }

        /// <exclude />
        public string FormControlLabel
        {
            get { return _formControlLabel; }
            set { _formControlLabel = value; }
        }

    }

    internal sealed class TemplatedButtonUiControl : ButtonUiControl, IWebUiControl
    {
        private Type _userControlType;

        internal TemplatedButtonUiControl(Type userControlType)
        {
            _userControlType = userControlType;
        }

        public void InitializeViewState()
        {
        }

        public Control BuildWebControl()
        {
            ButtonTemplateUserControlBase userControl = _userControlType.ActivateAsUserControl<ButtonTemplateUserControlBase>(this.UiControlID);

            userControl.FormControlLabel = this.Label;
            userControl.FormControlClickEventHandler += this.ClickEventHandler;

            return userControl;
        }

        public bool IsFullWidthControl { get { return false; } }

        public string ClientName { get { return null; } }
    }


    [ConfigurationElementType(typeof(TemplatedButtonUiControlFactoryData))]
    internal sealed class TemplatedButtonUiControlFactory : Base.BaseTemplatedUiControlFactory
    {
        public TemplatedButtonUiControlFactory(TemplatedButtonUiControlFactoryData data)
            : base(data)
        { }

        public override IUiControl CreateControl()
        {
            TemplatedButtonUiControl control = new TemplatedButtonUiControl(this.UserControlType);

            return control;
        }
    }



    [Assembler(typeof(TemplatedButtonUiControlFactoryAssembler))]
    internal sealed class TemplatedButtonUiControlFactoryData : ButtonUiControlFactoryData, Base.ITemplatedUiControlFactoryData
    {
        private const string _userControlVirtualPathPropertyName = "userControlVirtualPath";
        private const string _cacheCompiledUserControlTypePropertyName = "cacheCompiledUserControlType";

        [ConfigurationProperty(_userControlVirtualPathPropertyName, IsRequired = true)]
        public string UserControlVirtualPath
        {
            get { return (string)base[_userControlVirtualPathPropertyName]; }
            set { base[_userControlVirtualPathPropertyName] = value; }
        }

        [ConfigurationProperty(_cacheCompiledUserControlTypePropertyName, IsRequired = false, DefaultValue = true)]
        public bool CacheCompiledUserControlType
        {
            get { return (bool)base[_cacheCompiledUserControlTypePropertyName]; }
            set { base[_cacheCompiledUserControlTypePropertyName] = value; }
        }
    }


    internal sealed class TemplatedButtonUiControlFactoryAssembler : IAssembler<IUiControlFactory, UiControlFactoryData>
    {
        public IUiControlFactory Assemble(IBuilderContext context, UiControlFactoryData objectConfiguration, IConfigurationSource configurationSource, ConfigurationReflectionCache reflectionCache)
        {
            return new TemplatedButtonUiControlFactory(objectConfiguration as TemplatedButtonUiControlFactoryData);
        }
    }


}
