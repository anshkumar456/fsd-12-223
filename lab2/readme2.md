# File System (FS Module)

in fs module directley communicate with os rather than os
the formal operations on a file or folder are

1. File :
   -write file , read file , append file
2. Folder :
   -MKdir/Md
   -rmdir/rm
   -readdir
3. File metadata :
   -stat
   -lstat
   -rstat
4. Watch :
   -watch , unwatch
5. Stream :
   -readstream
   -writestream

all function are promise so it must be called with await
