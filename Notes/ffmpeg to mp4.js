//http://ffmpeg.org/ffmpeg.html
//http://linuxers.org/book/export/html/593

//common settings
//http://blog.superuser.com/2012/02/24/ffmpeg-the-ultimate-video-and-audio-manipulation-tool/

//shows the info
ffmpeg -codecs
ffmpeg -formats 

-y = overwrites the destination file if exists

//show info for file
ffmpeg0.exe -i 2.mp4

#//best
//instantdemo frame rate 15 + mouse 20
//export AVI for best quality then use (4min avi(5mb) = mp4 (2.7mb)) using :
ffmpeg -i sco.avi -f mp4 -vcodec libx264 bigbuckbunny.mp4

using vloader ffmpeg
#//best

//To set the video bitrate of the output file to 64kbit/s:
ffmpeg -i input.avi -b:v 64k output.avi

//To force the frame rate of the output file to 24 fps:
ffmpeg -i input.avi -r 24 output.avi

//vloader convert to mp4
ffmpeg0.exe  -i 2.AVI -strict experimental -vcodec mpeg4 -maxrate 1000 -b 700 -qmin 3 -qmax 5 -bufsize 4096 -g 300 -acodec aac -vol 384 -ar 44100 -ab 192k -ac 2 -s 480x320 -y 3.MP4

//sample to convert to mp4 + audio copy
ffmpeg0.exe  -i 2.AVI -vcodec libx264 -acodec copy -y 3.MP4

//strict experimental switch so we can set the aac as audio coder
ffmpeg0.exe  -i 2.AVI -strict experimental -vcodec libx264 -acodec aac -ar 48000 -ac 2 -y 3.MP4

//vloader
    string_0 = " -i \"$1\"";
    string_1 = " -threads 0 -i \"$1\" -acodec libmp3lame -ar 44100 -ab 192k -ac 2 -vol 384 -y \"$2\"";
    string_2 = " -i \"$1\" -f avi -vcodec mpeg4 -threads 4 -qscale 4 -g 300 -vtag DX50 -s 614x346 -acodec libmp3lame -ab 192k -ar 44100 -ac 2 -y \"$2\"";
    string_3 = " -i \"$1\" -f avi -vcodec mpeg4 -threads 4 -qscale 4 -g 300 -vtag DX50 -acodec libmp3lame -ab 192k -ar 44100 -ac 2 -y \"$2\"";
    string_4 = " -i \"$1\" -vcodec wmv2 -qscale 4 -g 300 -acodec wmav2 -ar 44100 -ab 192k -ac 2 -b 1500k -y \"$2\"";
    string_5 = " -i \"$1\" -strict experimental -vcodec mpeg4 -r 12 -s 176x144 -acodec aac -ac 1 -ar 22050 -vol 384 -y \"$2\"";
    string_6 = " -i \"$1\" -strict experimental -vcodec mpeg4 -maxrate 1000 -b 700 -qmin 3 -qmax 5 -bufsize 4096 -g 300 -acodec aac -vol 384 -ar 44100 -ab 192k -ac 2 -s 480x320 -y \"$2\"";
