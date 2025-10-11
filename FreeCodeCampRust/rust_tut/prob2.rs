use std::any::type_name;

fn type_of<T>(_: &T) -> &str {
	type_name::<T>()
}

fn main() {
	let mut x = 1;
	x = x+2;
	println!("{}",type_of(&x));
	
	assert_eq!(x, 3);
	println!("Success!");
}
