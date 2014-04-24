/**
 * @author Bikas Vaibhav (http://native5.com) 2013
 * Rewrote the plug-in at https://github.com/phonegap/phonegap-plugins/tree/master/Android/Share
 * It can now accept min and max dates for DatePicker.
 */

package com.native5.plugins.share;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Intent;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.CallbackContext;

public class Share extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackId) {
		try {
			JSONObject jo = args.getJSONObject(0);
			String type = jo.getString("type");
			String subject = jo.getString("subject");
			String text = jo.getString("text");
			String email = jo.getString("email");
			String cc = jo.getString("cc");
			String bcc = jo.getString("bcc");
			boolean chooser = jo.getBoolean("chooser");

			if(type.equals("all")) {
				doSendIntent(subject, text, chooser);
			}
			if(type.equals("email")) {
				doEmailIntent(subject, email, cc, bcc, text, chooser);
			}
			
			callbackId.sendPluginResult(new PluginResult(PluginResult.Status.OK));
			return true;
		} catch (JSONException e) {
			callbackId.sendPluginResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
			return true;
		}
	}
	
	private boolean doSendIntent(String subject, String text, boolean chooser) {
		Intent sendIntent = new Intent(Intent.ACTION_SEND);
		sendIntent.setType("text/plain");
		sendIntent.putExtra(Intent.EXTRA_SUBJECT, subject);
		sendIntent.putExtra(Intent.EXTRA_TEXT, text);
		
		if(chooser) {
			this.cordova.startActivityForResult(this, Intent.createChooser(sendIntent, subject), 0);
		}
		else {
			this.cordova.startActivityForResult(this, sendIntent, 0);
		}
		
		return true;
	}
	
	private boolean doEmailIntent(String subject, String email, String cc, String bcc, String text, boolean chooser) {
		Intent sendIntent = new Intent(Intent.ACTION_SEND);
		sendIntent.setType("message/rfc822");
		sendIntent.putExtra(Intent.EXTRA_SUBJECT, subject);
		sendIntent.putExtra(Intent.EXTRA_TEXT, text);
		if(!email.equals("")) {
			sendIntent.putExtra(Intent.EXTRA_EMAIL, new String[]{email});
		}
		if(!cc.equals("")) {
			sendIntent.putExtra(Intent.EXTRA_CC, new String[]{cc});
		}
		if(!bcc.equals("")) {
			sendIntent.putExtra(Intent.EXTRA_BCC, new String[]{bcc});
		}
		
		if(chooser) {
			this.cordova.startActivityForResult(this, Intent.createChooser(sendIntent, subject), 0);
		}
		else {
			this.cordova.startActivityForResult(this, sendIntent, 0);
		}
		
		return true;
	}

}
