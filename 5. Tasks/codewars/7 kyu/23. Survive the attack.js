// https://www.codewars.com/kata/634d0f7c562caa0016debac5

function hasSurvived(attackers, defenders){
  const survivors = {
    attackers: [],
    defenders: []
  }

  const attackPotential = {
    attackers: 0,
    defenders: 0,
  }

  for (let i = 0; i < attackers.length; i++) {
    const damage = {
      attacker: attackers[i],
      defender: defenders[i],
    }

    attackPotential.attackers += damage.attacker
    attackPotential.defenders += damage.defender

    if (damage.attacker > damage.defender) {
      survivors.attackers.push(damage.attacker)
    } else if (damage.attacker < damage.defender) {
      survivors.defenders.push(damage.defender)
    }
  }

  return survivors.defenders.length === survivors.attackers.length
    ? attackPotential.defenders >= attackPotential.attackers
    : survivors.defenders.length > survivors.attackers.length
}
