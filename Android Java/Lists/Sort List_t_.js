//http://stackoverflow.com/questions/9109890/android-java-how-to-sort-a-list-of-objects-by-a-certain-value-within-the-object
  Collections.sort(empList, new Comparator<Employee>(){
  public int compare(Employee emp1, Employee emp2) {
    return emp1.getFirstName().compareToIgnoreCase(emp2.getFirstName());
  }
});