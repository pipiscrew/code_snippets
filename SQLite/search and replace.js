//http://stackoverflow.com/a/1061708/1320686
update table_name set 
  content_url = replace(content_url, 'band%20albums', 'bands/studio%20albums')
where
  content_url like '%nazgulled/music/band_20albums/%';