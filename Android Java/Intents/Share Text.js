        //////////////
        //SHARE button
        //////////////
        Button btShare;
        btShare = (Button) findViewById(R.id.btnShare);
        btShare.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                EditText ed = (EditText) findViewById(R.id.txtNoteUPD);
                int startSelection = ed.getSelectionStart();
                int endSelection = ed.getSelectionEnd();

                String selectedText;

                if (startSelection != endSelection)
                    selectedText = ed.getText().toString().substring(startSelection, endSelection);
                else
                    selectedText = ed.getText().toString();


                Intent localIntent = new Intent("android.intent.action.SEND");
                localIntent.setType("text/plain");
                localIntent.putExtra("android.intent.extra.TEXT", ed.getText().toString());
                startActivity(Intent.createChooser(localIntent, "Share to"));
            }
        });