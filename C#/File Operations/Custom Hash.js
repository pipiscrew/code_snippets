//http://bretm.home.comcast.net/~bretm/hash/6.html

        public static uint ComputeHash(byte[] data)
        {
            const int p = 16777619;
            uint hash = 2166136261;

            for (int i = 0; i < data.Length; i++)
                hash = (hash ^ data[i]) * p;

            hash += hash << 13;
            hash ^= hash >> 7;
            hash += hash << 3;
            hash ^= hash >> 17;
            hash += hash << 5;

            if (hash < 1000000000)
                hash += 1000000000;

            return hash;
        }