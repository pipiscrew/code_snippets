	/**
	 * Retreive a random 128 character string
	 * @return string Random string
	 */
	public function getCSRF()
	{
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$token = '';
		for($i=0; $i <= 128; $i++) {
			$token .= $characters[mt_rand(0, strlen($characters) - 1)];
		}
		return $token;
	}