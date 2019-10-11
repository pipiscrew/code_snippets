if(isset($_POST['clientsFORM_updateID']) && !empty($_POST['clientsFORM_updateID']))
{
	$sql = "UPDATE `clients` set is_lead=:is_lead, client_name=:client_name, client_sector_id=:client_sector_id, client_sector_sub_id=:client_sector_sub_id, client_source_id=:client_source_id, client_rating_id=:client_rating_id, country_id=:country_id, manager_name=:manager_name, address=:address, vat_no=:vat_no, tax_office_id=:tax_office_id, telephone=:telephone, mobile=:mobile, email=:email, facebook_page=:facebook_page, website=:website, service_starts=:service_starts, service_ends=:service_ends, comment=:comment, owned_date=:owned_date, owner=:owner, modified_date=:modified_date, modified_by=:modified_by, has_facebook_page_before=:has_facebook_page_before, facebook_likes=:facebook_likes, next_renewal=:next_renewal, marketingplan_datetime=:marketingplan_datetime, marketingplan_location=:marketingplan_location, marketingplan_google=:marketingplan_google, marketingplan_attachment=:marketingplan_attachment, room_exists=:room_exists WHERE client_id=:client_id";
	$stmt = $db->prepare($sql);
	$stmt->bindValue(':client_id', $_POST['clientsFORM_updateID']);
	
	$stmt->bindValue(':modified_date' , date("Y-m-d H:i:s"));
	$stmt->bindValue(':modified_by' , $_SESSION["id"]);
	
	$ret_val = "isupdate";
}
else
{
	$sql = "INSERT INTO `clients` (client_code, is_lead, client_name, client_sector_id, client_sector_sub_id, client_source_id, client_rating_id, country_id, manager_name, address, vat_no, tax_office_id, telephone, mobile, email, facebook_page, website, service_starts, service_ends, comment, owned_date, owner, modified_date, modified_by, has_facebook_page_before, facebook_likes, next_renewal, marketingplan_datetime, marketingplan_location, marketingplan_google, marketingplan_attachment, room_exists) VALUES (:client_code, :is_lead, :client_name, :client_sector_id, :client_sector_sub_id, :client_source_id, :client_rating_id, :country_id, :manager_name, :address, :vat_no, :tax_office_id, :telephone, :mobile, :email, :facebook_page, :website, :service_starts, :service_ends, :comment, :owned_date, :owner, :modified_date, :modified_by, :has_facebook_page_before, :facebook_likes, :next_renewal, :marketingplan_datetime, :marketingplan_location, :marketingplan_google, :marketingplan_attachment, :room_exists)";
	$stmt = $db->prepare($sql);
	
	$stmt->bindValue(':client_code' , $_POST['client_code']);
	$stmt->bindValue(':owned_date' , date("Y-m-d H:i:s"));
	$stmt->bindValue(':owner' , $_SESSION["id"]);
	
	$ret_val = "isnew";
}