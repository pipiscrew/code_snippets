//http://stackoverflow.com/questions/4980720/android-sort-array

Arrays.sort(datetable, new Comparator<String[]>() {
    @Override
    public int compare(String[] entry1, String[] entry2) {
        // Sort by date
        return entry1[0].compareTo(entry2[0]);
    }
});