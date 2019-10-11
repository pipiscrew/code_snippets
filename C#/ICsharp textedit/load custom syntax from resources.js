//http://www.csharpblog.co.cc/2010/09/syntax-highlighting-control.html

using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Xml;
using ICSharpCode.TextEditor.Document;

namespace QueryAnalyzerPlus
{
    public class AppSyntaxModeProvider : ISyntaxModeFileProvider
    {
        List<SyntaxMode> syntaxModes = null;

        public ICollection<SyntaxMode> SyntaxModes
        {
            get
            {
                return syntaxModes;
            }
        }

        public AppSyntaxModeProvider()
        {
            Assembly assembly = Assembly.GetExecutingAssembly();

            //load modes list
            Stream syntaxModeStream = assembly.GetManifestResourceStream("QueryAnalyzerPlus.Resources.SyntaxModes.xml");
            if (syntaxModeStream != null)
            {
                syntaxModes = SyntaxMode.GetSyntaxModes(syntaxModeStream);
            }
            else
            {
                syntaxModes = new List<SyntaxMode>();
            }

            assembly = null;
        }

        public XmlTextReader GetSyntaxModeFile(SyntaxMode syntaxMode)
        {
            Assembly assembly = Assembly.GetExecutingAssembly();

            // load syntax schema
            Stream stream = assembly.GetManifestResourceStream("QueryAnalyzerPlus.Resources." + syntaxMode.FileName);
            
            assembly = null;

            return new XmlTextReader(stream);
        }

        public void UpdateSyntaxModeList()
        {
            // resources don't change during runtime
        }
    }
}


//form
        private void LoadSyntax()
        {
            HighlightingManager.Manager.AddSyntaxModeFileProvider(new AppSyntaxModeProvider());
            txtSQL.SetHighlighting("SQL");
        }