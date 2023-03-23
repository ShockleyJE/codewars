fn even_or_odd(i: i32) -> &'static str {
    let mut val = "Odd";
    if i % 2 == 0{
        val = "Even"
    }
    val
}