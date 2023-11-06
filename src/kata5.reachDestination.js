const reachDestination = (distance, speed) => {
  const total = Math.ceil((distance / speed) * 2) / 2;
  return `I will arrive in ${total} hours.`;
};

module.exports = reachDestination;
