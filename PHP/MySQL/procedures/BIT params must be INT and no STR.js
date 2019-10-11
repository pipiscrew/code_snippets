//http://ca.php.net/manual/en/mysqli-stmt.bind-param.php

only on procedures the BIT param must passed as INT from PHP!

$stmt -> bind_param('sssssssssssssssssisssssssssssssissssss', $comp_title, $comp_name, $cmp_password, $page_editor, $admin_name, $comp_address, $zipcode, $area, $phone_old, $fax, $email, $url, $member_group, $member_international, $member_syndicate, $media_unit, $member_union, $map_ok, $categ_id1, $categ_id2, $categ_id3, $categ_id4, $logo, $advertisement_link, $advertisement_pic, $enabled, $greeklish, $lastupdate, $latlon, $latitude, $longitude, $is_visible, $phone, $email_others, $comp_title_en, $contact_email, $station_type, $periodicity);