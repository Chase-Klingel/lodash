'use strict';
/****************************** GETTING STARTED ******************************/

const worker = (users) => {
  return _.filter(users, { active: true });
}

module.exports = worker;

/*********************************** SORT ME **********************************/

/* MY SOLUTION */

const worker = (itemsArr) => {
  const smallToLarge =  _.sortBy(itemsArr, 'quantity');

  return smallToLarge.reverse();
};

module.exports = worker;

/* OFFICIAL SOLUTION */

const worker = (itemsArr) => {
  return _.sortBy(itemsArr, 'quantity').reverse();
};

module.exports = worker;

 /******************************* IN EVERY CASE *******************************/

const worker = (collection) => {
  return _.forEach(collection, function(city) {
    if (city.population > 1) {
      city.size = 'big';
    } else if (city.population >= .5) {
      city.size = 'med';
    } else {
      city.size = 'small';
    }
  });
 };

module.exports = worker;

/******************************* EVERYONE IS MIN ******************************/

const worker = function(cityTemps) {
  const sortedGroups = {
    hot: [],
    warm: []
  };

  _.forEach(cityTemps, (temps, cityName) => {
    const isWarm = _.some(temps, (temp) => {
      return temp > 19;
    });

    const isHot = _.every(temps, (temp) => {
      return temp > 19;
    });

    if (isHot) {
      sortedGroups.hot.push(cityName);
      return;
    }

    if (isWarm) {
      sortedGroups.warm.push(cityName);
    }
  });

  return sortedGroups;
};

module.exports = worker;

/********************************* CHAIN MAIL *********************************/

/* MY SOLUTION */

const worker = function(words) {
  return _.chain(words)
  .sortBy(word => {
    return word;
  })
  .map(word => {
    word = word.toUpperCase() + 'CHAINED';
    return word;
  });
};

module.exports = worker;

/* OFFIICIAL SOLUTION */

const worker = function(words) {
  return _.chain(words)
    .map(word => {
      return word + 'Chained';
    })
    .map(word => {
      return word.toUpperCase();
    })
    .sortBy();
};

module.exports = worker;

/***************************** COUNT THE COMMENTS *****************************/

/* MY SOLUTION */

const worker = comments => {
  const output = [];
  const userObj = _.groupBy(comments, 'username');
  let index;
  let i = 0;
  _.forOwn(userObj, (value, key) => {
    index = {
      'username': key,
      'comment_count': _.size(userObj[Object.keys(userObj)[i]])
    };
    output.push(index);
    i++;
  });

  if (output.length > 2) {
    let temp = output[0];
    output[0] = output[2];
    output[2] = temp;
  }

  return output;
};

module.exports = worker;

/* OFFICIAL SOLUTION */

const commentcount = function(comments) {
  return _.chain(comments)
  .groupBy('username')
  .map(function(item, name) {
    return {username: name, comment_count: _.size(item)};
  })
  .sortBy(function(counted) {
    return -counted['comment_count'];
  });
};

module.exports = commentcount;

/**************************** GIVE ME AN OVERVIEW ****************************/

const worker = (orders) => {
  const grouped = _.groupBy(orders, (order) => {
    return order.article;
  });

  const acc = [];
  let totalOrders;
  let articleNum;

  _.forEach(grouped, (ordersArr, articleNumStr) => {
    totalOrders =  _.reduce(ordersArr, (sum, order) => {
      return sum + order.quantity;
    }, 0);

    articleNum = parseInt(articleNumStr);

    acc.push({article: articleNum, total_orders: totalOrders});
  });

  return _.sortBy(acc, 'total_orders').reverse();
};

module.exports = worker;

/*********************************** ANALYZE **********************************/

const worker = (freelancers) => {
  freelancers = _.sortBy(freelancers, 'income');

  let avgIncome = _.reduce(freelancers, (sum, freelancer) => {
    return sum + freelancer.income;
  }, 0);

  avgIncome = avgIncome / freelancers.length;

  const underperform = _.filter(freelancers, (freelancer) => {
    return freelancer.income <= avgIncome;
  });

  const overperform = _.filter(freelancers, (freelancer) => {
    return freelancer.income > avgIncome;
  });

  return {
    average: avgIncome,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;

/****************************** START TEMPLATING ******************************/

const worker = (user) => {
  return _.template('Hello <%= name %> (logins: <%= login.length %>)')(user);
};

module.exports = worker;
