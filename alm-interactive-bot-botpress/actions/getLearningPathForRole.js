  /**
   * Get Learning Path based on input
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
        'https://learningmanagerapac.adobe.com/primeapi/v2/learningObjects',
        {
          params: {
            access_token: 'd3d9f15a0c3cbb8b38a03d038f1f6a24',
            'filter.tagName': value,
            'filter.loTypes': 'learningProgram'
          }
        },
        config
      )
      .then(function(response) {
        bp.logger.info(response.status)
        const recieved_Data = response.data
        const result = recieved_Data.data
          .map(dt => {
            return (
              '\nCOURSE : ' +
              dt.attributes.localizedMetadata[0].description +
              '\nENROLLMENT : ' +
              dt.attributes.enrollmentType +
              '\nFORMAT : ' +
              dt.attributes.loFormat
            )
          })
          .join(' \n\n')
          .toString()

        const message = {
          type: 'card',
          title: `Couses for ${value}`,
          subtitle: `${result} `
        }

        bp.events.replyToEvent(event, [message])
      })
      .catch(function(error) {
        bp.logger.info(error)
      })
  }

  return myAction(args.name, args.value)