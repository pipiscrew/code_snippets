	@Override
	public View getView(int position, View convertView, ViewGroup arg2) {
		holder.rowRedeem.setTag(new String[]{String.valueOf(position),""}); //store the List<>position in TAG

		holder.rowRedeem.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				String[] x = (String[]) v.getTag();
				
				if (x[1].length()>0)
				{
					Integer pos= Integer.parseInt(x[0]);
					String competitionID =	data.get(pos).getIsWinner4Comp(); //use of List<>position
					getBID_info_Show_ShareVIA(competitionID);
				}
				else 
				{
					Integer pos= Integer.parseInt(x[0]);
					
					//here pass tje pos!
					show_and_validate_user_REDEEM(data.get(pos).getIsRedeem4Comp(),data.get(pos).getRedeemCode4Comp(),data.get(pos).getRowID(),pos);
					
				}

			}
		});
		
		Generic4lstv item = (Generic4lstv) getItem(position);
		
		if (item.getIsRedeem4Comp()!=null && item.getRedeemCode4Comp()!=null)			
		{	//when message contains isRedeem
			holder.rowRedeem.setImageResource(R.drawable.redeem);
			holder.rowRedeem.setVisibility(View.VISIBLE);
		}
		else if (item.getIsPurchased())
		{
			String[] y = (String[]) holder.rowRedeem.getTag();
			y[1] = "1";
			holder.rowRedeem.setTag(y);
					
			holder.rowRedeem.setImageResource(R.drawable.share);
			holder.rowRedeem.setVisibility(View.VISIBLE);
		}
	}
	
	private void show_and_validate_user_REDEEM(String competition_ID, final String redeem_code,final String rowRECID,int sItem)
	{.
	.
	.
	
	
			//after valid transaction - set image for share
			Generic4lstv item = (Generic4lstv) getItem(s_Item);
			item.setIsRedeem4Comp(null);
			item.setRedeemCode4Comp(null);
			item.setIsPurchased(true);
			notifyDataSetChanged();
	}
	
    @Override
    public void notifyDataSetChanged() {
        super.notifyDataSetChanged();
    }