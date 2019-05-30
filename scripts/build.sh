#

mkdir -p dist

# uBlocklist file
cat data/pattern-and-re.txt | sort | uniq > dist/uBlacklist.txt

# sort url
cat data/url.txt | sort | uniq > dist/url.txt
