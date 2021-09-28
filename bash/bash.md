## Permissions

- When we call `ls -l`, the letter combos tell us info about the file.

```bash
❯ ls -l
total 8
-rw-r--r--  1 andrewmartin  staff   395B  8 Sep 16:35 README.md
drwxr-xr-x  3 andrewmartin  staff    96B  9 Sep 18:18 bash
```

- For `bash`, the first `d` tells us that that `bash` is a directory.
- The next three groups of three letters indicate respectively the permissions for:
  - owner (`andrewmartin`)
  - owning group (`staff`)
  - everyone else
- `-` indicates that the given pricipal does not have the given permission
- `r` indicates the ability to "read" a file's contents
- `w` indicates the ability to modify ("write") the file
- `x` indicates the ability to enter a directory ("execute", also known as "search")
- The owner can read, write, and execute `rwx`
- The owning group can read and execute, but not write `r-x`
- Everyone else can read and execute, but not write `r-x`
- Looking at `README.md`, we can see that everyone can read, but only owner can modify. No-one can execute, as that wouldn't make sense anyway.

## Connecting Programs

- `< file` allows you to rewire the _input_ stream of a program to a file
- `> file` allows you to rewire the _output_ stream of a program to a file
- `>>` appends to a file

```bash
# > is used to rewire output of echo to a new file hello.txt
$ echo hello > hello.txt
$ cat hello.txt
hello
# >> is used to append
$ echo world >> hello.txt
$ cat hello.txt
hello
world
```

## Killing processes

- kill all processes named `process`
- `$ killall <process>`
- eg `$ killall node`
  * note this is dangerous
