private Object[] getArrayFromVector(Vector myVector) {

    int vectorSize = myVector.size();
    Object[] result = new Object[vectorSize];

    for (int i =0; i<vectorSize; i++) {
        result[i] = myVector.elementAt(i);
    }

    return result;
}