//http://stackoverflow.com/questions/10348907/how-to-sort-json-array-by-its-object-attribute-on-a-listactivity

Collections.sort(youarrayList, new Comparator<VideoLocation>() {

            @Override
            public int compare(VideoLocation lhs, VideoLocation rhs) {
                return lhs.name.compareTo(rhs.name);
            }
        });