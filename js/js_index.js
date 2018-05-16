        function onRangeChange(rangeInputElmt, listener) {

            var inputEvtHasNeverFired = true;

            var rangeValue = {
                current: undefined,
                mostRecent: undefined
            };

            rangeInputElmt.addEventListener("input", function(evt) {
                inputEvtHasNeverFired = false;
                rangeValue.current = evt.target.value;
                if (rangeValue.current !== rangeValue.mostRecent) {
                    listener(evt);
                }
                rangeValue.mostRecent = rangeValue.current;
            });

            rangeInputElmt.addEventListener("change", function(evt) {
                if (inputEvtHasNeverFired) {
                    listener(evt);
                }
            });

        }


        var eventSizeSlider = document.querySelector("#storlek");
        var showSize = document.querySelector("#visaStorlek");
        var eventRecipientsSlider = document.querySelector("#recipients");
        var showRecipients = document.querySelector("#showRecipients");

        var chosenSize = 10000;
        var chosenRecipients = 1500000;

        var mytotalCost = document.querySelector("#totalCost");
        var mybudgetShare = document.querySelector("#budgetShare");
        var myFinanceShare = document.querySelector("#financeShare");

        var totalCost = 156;
	var financedCost = 156;
	var budgetShare = 16.6;
	var financeShare = 100;

        var sizeUpdate = function() {
            totalCost = (chosenSize * chosenRecipients * 12 / 1000000000).toFixed(2);
	    budgetShare = (100*totalCost/939.6).toFixed(2);
	    financeShare = (100*totalCost/financedCost).toFixed(2);
            mytotalCost.innerHTML = "<b>" + totalCost + "</b> miljarder Sek";
            mybudgetShare.innerHTML = "<b>" + budgetShare + "</b> %";
            myFinanceShare.innerHTML = "<b>" + financeShare + "</b> %";
        };

        var recipientsUpdate = function() {
            totalCost = (chosenSize * chosenRecipients * 12 / 1000000000).toFixed(2);
	    budgetShare = (100*totalCost/939.6).toFixed(2);
	    financeShare = (100*totalCost/financedCost).toFixed(2);
            mytotalCost.innerHTML = "<b>" + totalCost + "</b> miljarder Sek";
            mybudgetShare.innerHTML = "<b>" + budgetShare + "</b> %";
            myFinanceShare.innerHTML =  "<b>" + financeShare + "</b> %";
        };


        ["input", "change"].forEach(function(myEvtType) {
            eventSizeSlider.addEventListener(myEvtType, function() {
                sizeUpdate();
            });
        });


        ["input", "change"].forEach(function(myEvtType) {
            eventRecipientsSlider.addEventListener(myEvtType, function() {
                recipientsUpdate();
            });
        });


        var sizeListener = function(myEvt) {
            showSize.innerHTML = "Storlek på medborgarlön: <b>" + myEvt.target.value + "</b> Sek";
            chosenSize = myEvt.target.value;
            sizeUpdate();
        };

        var recipientsListener = function(myEvt) {
            showRecipients.innerHTML = "Antal recipients: <b>" + (myEvt.target.value/1000000).toFixed(2) + "</b> miljoner";
            chosenRecipients = myEvt.target.value;
            recipientsUpdate();
        };

        onRangeChange(eventSizeSlider, sizeListener);
        onRangeChange(eventRecipientsSlider, recipientsListener);