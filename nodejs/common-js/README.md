# common-js

This standard was introduced by NodeJS to allow JavaScript code to be modular and unlock the potential of code reuse.
CommonJS allows you to define modules and export them to be used in other modules, using a set of keywords. It is 
different from ESM modules, which are the standard in modern JavaScript.

## Keywords

- `require`: This keyword is used to import a module. It is used to load a module into the current module.
- `module.exports`: This keyword is used to export a module. It is used to expose a module to other modules.

Note: there is a subtle difference between how exports work between CommonJS and ESM. The first one doesn't have a 
default named export, while the second one does. This implies that if you want to emulate the default export behavior
in CommonJS, you have to assign your exports to a property called `default` in the `module.exports` object and then 
import it using the `require` function followed by `.default`.
