//It's because you're hiding some of your views sometimes, and you never show them again.
//Example:

        if (!(datapark.get(position).bio.equals(""))){          
          holder.bio.setText(datapark.get(position).bio);
        }else{
          ((TextView)convertView.findViewById(R.id.bio)).setVisibility(View.GONE);
        }
instead try:

        if (!(datapark.get(position).bio.equals(""))){ 
          holder.bio.setVisibility(View.VISIBLE);         
          holder.bio.setText(datapark.get(position).bio);
        }else{
          holder.bio.setVisibility(View.GONE);
        }
        
        
//Remember that views are recycled, so, unless you show the views the next time you return one,
//they will never be visible again. 