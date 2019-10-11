            //validation for lic remove
            Type classType = typeof(LIC.LicensedComponent);
            object[] tt = classType.GetCustomAttributes(true);

            if (tt.Length != 1)
                throw new Exception();

            classType = null;
            //validation for lic remove