The best way to stop the PlatformVerificationTask in a distributed development environment I would suggest adding the following to the mobile app's project file:

<Target Name="PlatformVerificationTask">
</Target>

This will overwrite the PlatformVerificationTask in \Windows\Microsoft.NET\Framework\v3.5\Microsoft.CompactFramework.Common.targets



  <ProjectExtensions>
    <VisualStudio>
      <FlavorProperties GUID="{F184B08F-C81C-45F6-A57F-5ABD9991F28F}">
        <HostingProcess disable="1" />
      </FlavorProperties>
    </VisualStudio>
  </ProjectExtensions>
<Target Name="PlatformVerificationTask">
</Target>
  <!-- To modify your build process, add your task inside one of the targets below and uncomment it.
       Other similar extension points exist, see Microsoft.Common.targets.
  <Target Name="BeforeBuild">
  </Target>
  <Target Name="AfterBuild">
  </Target>

more for this tag
http://social.msdn.microsoft.com/Forums/en-US/vside2008/thread/5ba5b6a7-a9c3-41e9-9439-7ff5af863bec/
http://blogs.msdn.com/b/vsdteam/archive/2006/09/15/756400.aspx
