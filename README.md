# CK Editor Test Rig

A basic setup for unit-testing CK Editor within a Karma/Jasmine environment.

Initialise the project:

```
npm install
```

Now, run some unit tests!

```
karma start
```

## The Gotcha Summary
To get CK Editor working in unit tests, you should:
* *Ensure you're serving the right files*
  CK Editor loads a number of files (config, skins) asynchronously on startup. Your test runner needs to serve
  these files. See karma.conf.js for details.
* *Ensure edited elements are attached to the DOM*
  CK Editor uses ```document.getElementById``` internally. Therefore you should attach elements to document.body
  otherwise you'll see strange errors.
* *Wait for the editor to load before running tests*
  Calls to ```CKEDITOR.inline``` will return an instance right away, but you can't use it until it fires the
  instanceReady event.
* *Changes to Html run in different execution scope
  You'll need to call any subsequent assertions within a ```setTimeout()```
