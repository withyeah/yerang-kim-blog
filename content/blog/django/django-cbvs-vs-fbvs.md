---
title: '[Django] CBVs vs FBVs'
date: 2019-11-05 20:11:56
category: django
---

<br/>

> ##### The most import takeaway from the research
>
> ###CBVs and FBVs don't replace each other
> 
<br/>
---

## Comparison

|                               |                  CBVs                   |                        FBVs                        |
| :---------------------------: | :-------------------------------------: | :------------------------------------------------: |
|         **Code Flow**         |                Implicit                 |                      Explicit                      |
|        **Readability**        |                 Harder                  |                        Easy                        |
|        **Reusability**        |                  Great                  |                        Hard                        |
| **Specialized Functionality** |       No but can use generic CBVs       | Handling of HTTP methods via conditional branching |
|    **Usage of Decorators**    | Require extra import or method override |                  Straightforward                   |
|     **Code Duplication**      |                   DRY                   |                       A lot                        |
|       **Extendability**       |            Easy using Mixins            |                        Hard                        |
<br/>
---

## Conclusion

It's hard to say which is better. It highly depends on the context.

If you need to implement let's say a list view, it'd be better with CBVs where you can just subclass the `ListView` and override the attributes.

On the other hand if you want to make a complicated operation or handle multiple forms at the same time, FBVs will be better.
<br/>
<br/>
`Reference`<br/>
[Django : Class Based Views vs Function Based Views](https://medium.com/@ksarthak4ever/django-class-based-views-vs-function-based-view-e74b47b2e41b)
<br/>