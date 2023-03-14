# Day31Deck

1. create new angular project
    - ng new <app_name>
2. add libraries (if necessary)
    - npm install --save <module_name>
3. Generate new component (inside components folder)
    - ng generate component <components/component_name> --flat --skip-tests
4. start angular server (add -o to open browser to localhost:4200)
    - ng serve

<br>

## Input / Output
* wr to child component

## property binding (root -> component)
```
root (ts) -> root (html) -> <app_component [var_name(to ts)]></app_component> -> component (ts) (use @Input()) -> component (html)
```
## event binding (component -> root)
```

```
