mod module1;
mod module2;



mod inner_mod {
    
    pub fn call_super() {
        super::extern_fn();
    }

    pub fn inner() {
        println!("Inner Module!!!");
    }
}

fn main() {
    
    module1::mod_file();
    module2::mode_dir();
    inner_mod::inner();
    inner_mod::call_super();

    let x = 5;
    let y = x;

    println!("값이 뭐냐면요... x: {x}, y: {y}");
}

fn extern_fn() {
    println!("call by super and outside of module");
}