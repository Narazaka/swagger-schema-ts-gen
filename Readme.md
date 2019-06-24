```
cat swagger.yaml | js-yaml | dtsgen --stdin -n "" | perl -ple "s/^declare\b/export/"
```
相当
