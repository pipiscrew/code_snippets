VB
GpsLocation = If(UseGps.IsChecked.Value, GeoProvider.DeviceLocation, Nothing)

c#
GpsLocation = UseGps.IsChecked.Value ? GeoProvider.DeviceLocation : null