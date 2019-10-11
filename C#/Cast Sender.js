//http://stackoverflow.com/questions/8732311/modifying-picturebox-on-click-c

private void boxClick(object sender, EventArgs e)
{
    (sender as PictureBox).Image = brush.CurrentImage;
}

