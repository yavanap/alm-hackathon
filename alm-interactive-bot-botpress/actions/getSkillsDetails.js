  /**
   * Get skills Deatils based on input
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

    const res = await axios.get('https://learningmanagerapac.adobe.com/primeapi/v2/skillInterest/search', {
      params: {
        access_token: 'd3d9f15a0c3cbb8b38a03d038f1f6a24',
        nameStartsWith: value,
        'filter.skillInterestTypes': 'ADMIN_DEFINED'
      },
      config
    })

    var id = res.data.data[0].id
    var url = 'https://learningmanagerapac.adobe.com/primeapi/v2/skills/' + id
    axios
      .get(
        url,
        {
          params: {
            access_token: 'd3d9f15a0c3cbb8b38a03d038f1f6a24'
          }
        },
        config
      )
      .then(function(response) {
        const message = {
          type: 'card',
          title: `Skills Details for Lightroom`,
          subtitle: `\n ID : ${response.data.data.id} \n DESCRIPTION : ${response.data.data.attributes.description} \n LEVEL : 1`
        }

        bp.events.replyToEvent(event, [message])
      })
      .catch(function(error) {
        bp.logger.info(error)
      })
  }

  return myAction(args.name, args.value)