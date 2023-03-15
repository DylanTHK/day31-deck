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

## @Input() / @Output()
* wr to child component

## property binding (root -> component)
```
1. root (ts)
 - set root_value to public variable
2. root (html)
 - assign property to <app-component>
 - [var_to_catch]="root_value"
 - <app-component [var_to_catch]="root_value"></app-component>
3. component (ts)
 - @Input()
 - var_to_catch: <T>
4. component (html)
 - call value from component (ts)
 - <p>{{ var_to_catch }}</p>
```
## event binding (component -> root)
```
1. component (html)
 - bind event to component (ts) method (to pass data)
2. component (ts) - calls method to add to Subject
 - @Output() var_out = new Subject<T>()
 - method() { var_out.next(value_to_pass)}
3. root (html)
 - <app-component (var_out)="rootMethod"></app-component>
4. root (ts)
 - rootMethod() { actual logic/manipulation }
 - edit reference through this rootMethod
```
