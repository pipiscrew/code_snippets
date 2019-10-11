LEFT JOIN sectors SC (nolock) on USRS.UsrSecID=SC.SecID
LEFT JOIN UsersCateg USC (nolock) on USRS.UsrCateg=USC.Code