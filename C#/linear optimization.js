        public static int minDrives(int[] used, int[] total)
        {
            // calculate total space and used space
            int totalSpace = 0;
            foreach (int i in total)
                totalSpace += i;

            int usedSpace = 0;
            foreach (int i in used)
                usedSpace += i;

            // order disks by their sizes descending
            int[] totalSorted = new int[total.Length];
            Array.Copy(total, totalSorted, total.Length);
            Array.Sort(totalSorted);
            Array.Reverse(totalSorted);

            // count the space available in X largest drives
            int availSpace = 0;
            int x = 0;

            while (availSpace < usedSpace)
                availSpace += totalSorted[x++];

            return x;
        }
        
        int[] rowA1 = new int[] { 300, 525, 110 };
        int[] rowA2 = new int[] { 350, 600, 115 };

        int[] rowB1 = new int[] { 1, 200, 200, 199, 200, 200 };
        int[] rowB2 = new int[] { 1000, 200, 200, 200, 200, 200 };

        int[] rowC1 = new int[] { 750, 800, 850, 900, 950 };
        int[] rowC2 = new int[] { 800, 850, 900, 950, 1000 };

        int[] rowD1 = new int[] { 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49 };
        int[] rowD2 = new int[] { 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50 };

        int[] rowE1 = new int[] { 331, 242, 384, 366, 428, 114, 145, 89, 381, 170, 329, 190, 482, 246, 2, 38, 220, 290, 402, 385 };
        int[] rowE2 = new int[] { 992, 509, 997, 946, 976, 873, 771, 565, 693, 714, 755, 878, 897, 789, 969, 727, 765, 521, 961, 906 };

        txtRES.Text = DiskSpace.minDrives(rowA1, rowA2).ToString() + "\r\n";
        txtRES.Text += DiskSpace.minDrives(rowB1, rowB2).ToString() + "\r\n";
        txtRES.Text += DiskSpace.minDrives(rowC1, rowC2).ToString() + "\r\n";
        txtRES.Text += DiskSpace.minDrives(rowD1, rowD2).ToString() + "\r\n";
        txtRES.Text += DiskSpace.minDrives(rowE1, rowE2).ToString() + "\r\n";