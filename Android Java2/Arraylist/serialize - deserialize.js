//use of 
private ArrayList<Supermarkets> Frag_Settings_Supermarkets_LIST = null;
private HashMap<Frag_Settings_Categories, List<Frag_Settings_Categories>> listDataChild;

General.save_hashmap(getActivity(), listDataChild, "02_WIN.png");
General.save_obj(getActivity(), Frag_Settings_Supermarkets_LIST, "03.png");
//public class Supermarkets implements Serializable {		
		
		
	public static boolean save_hashmap(Context c, Object obj, String filename) {
		try {
			FileOutputStream fos = c.openFileOutput(filename, Context.MODE_PRIVATE);
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			oos.writeObject(obj);
			oos.close();
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}
	
	public static HashMap<?,?> load_hashmap(Context context, String filename) {
		HashMap<?,?> map = null;
	      try
	      {
	         FileInputStream fis = new FileInputStream(filename);
	         ObjectInputStream ois = new ObjectInputStream(fis);
	         map = (HashMap) ois.readObject();
	         ois.close();
	         fis.close();
	      }catch(IOException ioe)
	      {
	         ioe.printStackTrace();
	         return null;
	      }catch(ClassNotFoundException c)
	      {
	         c.printStackTrace();
	         return null;
	      }
	      // Display content using Iterator
	      Set set = map.entrySet();
	      Iterator iterator = set.iterator();
	      while(iterator.hasNext()) {
	         Map.Entry mentry = (Map.Entry)iterator.next();
	         System.out.print("key: "+ mentry.getKey() + " & Value: ");
	         System.out.println(mentry.getValue());
	      }
	      
	      return map;
	}
	
	public static boolean save_obj(Context c, ArrayList<?> obj, String filename) {
		try {
			FileOutputStream fos = c.openFileOutput(filename, Context.MODE_PRIVATE);
			ObjectOutputStream oos = new ObjectOutputStream(fos);
			oos.writeObject(obj);
			oos.close();
		} catch (IOException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}

	public static ArrayList<?> load_obj(Context context, String filename) {
		try {
			FileInputStream fis = context.openFileInput(filename);
			ObjectInputStream is = new ObjectInputStream(fis);
			Object readObject = is.readObject();
			is.close();

			if (readObject != null && readObject instanceof ArrayList<?>) {
				return (ArrayList<?>) readObject;
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		return null;
	}