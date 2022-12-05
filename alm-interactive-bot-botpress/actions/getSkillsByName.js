  /**
   * Get skills based on input
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */
  const myAction = async (name, value) => {
    var axios = require('axios').default
    let config = {
      headers: { Authorization: 'oauth 29893ca8af9449457c031330bdbbd1cb' }
    }

    var res = axios
      .get(
        'https://learningmanagerapac.adobe.com/primeapi/v2/skillInterest/search',
        {
          params: {
            access_token: 'd3d9f15a0c3cbb8b38a03d038f1f6a24',
            nameStartsWith: value,
            'filter.skillInterestTypes': 'ADMIN_DEFINED'
          }
        },
        config
      )
      .then(function(response) {
        bp.logger.info(response.status)
        const recieved_Data = response.data
        const result = recieved_Data.data
          .map(dt => dt.attributes.name)
          .join(' ,\n\n')
          .toString()

        const message = {
          type: 'card',
          title: `Skills for ${value} : \n\n`,
          subtitle: `\n${result} `
        }

        bp.events.replyToEvent(event, [message])
      })
      .catch(function(error) {
        bp.logger.info(error)
      })
  }

  return myAction(args.name, args.value)