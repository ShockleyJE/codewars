fn even_or_odd(i: i32) -> &'static str {
    let mut val = "Odd";
    if i % 2 == 0{
        val = "Even"
    }
    val
}


// Ahhhh I should have use arm match. It's always arm day

fn even_or_odd(i: i32) -> &'static str {
    match i % 2 {
      0 => "Even",
      _ => "Odd",
    }
  }
  
  76 simila