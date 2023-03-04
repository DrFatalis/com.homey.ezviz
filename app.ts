import Homey from 'homey';

class EzvizClient extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Ezviz has started');
  }
}

module.exports = EzvizClient;
