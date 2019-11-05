---
title: [Django] CBVs vs FBVs
date: 2019-11-05 20:11:56
category: django
---

# [Django] What are the differences between CBVs and FBVs

> ##### The most import takeaway from the research
>
> ###CBVs and FBVs don't replace each other

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

---

## Conclusion

It's hard to say which is better. It highly depends on the context.

If you need to implement let's say a list view, it'd be better with CBVs where you can just subclass the `ListView` and override the attributes.

On the other hand if you want to make a complicated operation or handle multiple forms at the same time, FBVs will be better.
