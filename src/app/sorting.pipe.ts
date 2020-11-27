import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(posts, category = ''): unknown {
    if (!category) {
      return posts;
    } else {
      return posts.filter(post => {
        return post.category.toLowerCase() == category.toLowerCase()
      })
    }
  }

}
