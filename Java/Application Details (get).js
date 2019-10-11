       ApplicationDescriptor descriptor = 
              ApplicationDescriptor.currentApplicationDescriptor();
       String appVersion = descriptor.getName() + " " + descriptor.getVersion();
       Dialog.alert(appVersion + "\n" + crNotice);
