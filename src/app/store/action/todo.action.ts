import {Action, createAction, props} from '@ngrx/store';
import {Todo} from '../../modals/todo.modal';

export const addTodo = 'Add_Todo';

export class AddTodo implements Action {
  readonly type = addTodo;
  payload: Todo;
}





// export const AddTodo = createAction<string, { todo: Todo }>(
//   'Add Todo',
//   props<{ todo: Todo }>()
// );
