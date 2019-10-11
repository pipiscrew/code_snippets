String[] test = new String[eventNames.length()];
                    String[] test2;

                    for (int x = 0; x < eventNames.length(); x++){
                        //System.out.println(eventNames.get(x).toString());
                        String[] xx = eventNames.get(x).toString().split(" ");
                        test[x] = xx[1];


                    }

                    Arrays.sort(test);

                    String[] test3 = new String[eventNames.length()];
                    for(int q = 0; q < eventNames.length(); q++){
                        String str = eventNames.get(q).toString();
                        for(int p = 0; p < test.length; p++){
                            if(str.contains(test[p])){
                                test3[p] = str;
                            }
                        }
                    }


                    System.out.println(test.toString());
                    for (int x = 0; x < eventNames.length(); x++){
                        System.out.println("maand :"+x+" "+test3[x]);   
                    }