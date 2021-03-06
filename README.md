# CK Editor Test Rig

A basic setup for unit-testing CK Editor within a Karma/Jasmine environment.


## Getting Started

Initialise the project:

```
npm install
```

Now, run those unit tests!

```
karma start
```

## Who is this aimed at?
Developers who write CKEDITOR plugins but whose test suite does not use Bender (the testing framework used by CKEditor)

## The Tests
* ckeditor.test.js - Examples of instantiating and calling the CK Editor API from a test
* plugin.test.js - An example of how you can test your own CK Editor plugin

## The Gotcha Summary
To get CK Editor working in unit tests, you should:
* *Ensure you're serving the right files*
  CK Editor loads a number of files (config, skins) asynchronously on startup. Your test runner needs to serve
  these files. See karma.conf.js for details.
* *Ensure edited elements are attached to the DOM*
  CK Editor uses ```document.getElementById``` internally. Therefore you should attach elements to document.body
  otherwise you'll see strange errors.
* *Wait for the editor to load before running tests*
  Calls to ```CKEDITOR.replace``` will return an instance right away, but you can't use it until it fires the
  instanceReady event.