#

mkdir -p dist

# uBlocklist file
cat data/pattern-and-re.txt | sort > dist/uBlacklist.txt
