on APP.XML we declare at Application.Resources :
    <Application.Resources>
        <!--Background-->
        <ImageBrush x:Name="ApplicationBackground" ImageSource="/img/pagehhhsBG.png"/>
    </Application.Resources>
    
    ps: at "/img/pagehhhsBG.png" 
    	the	Build Action = Content
    
then on Grid of each form:
    <Grid x:Name="LayoutRoot" Background="{StaticResource ApplicationBackground}">